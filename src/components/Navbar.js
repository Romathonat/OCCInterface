import React from 'react';
import { connect } from 'react-redux';

import {callAPI, kindToCategoriesUrl, visitMetamodel} from '../utils.js';

import * as actions from '../actions/actionIndex.js';

import conf from '../../conf.js';

class NavBar extends React.Component{
  componentDidMount = () => {
    $('.ui.dropdown').dropdown();

    $('.ui.backendURL')
    .dropdown({
      allowAdditions: true
    });

    if(!window.integratedVersion){
      this.updateBackendURL();
    }
  }

  /*look for schemes and their corresponding kinds, and dispatch to the store the correct data*/
  getSchemes = (data) => {
    var kindAndMixinSchemes = {};
    var uriToCategoryMap = {}; // TODO LATER for actions
    
    // parse metamodel from QI response :
    visitMetamodel(data, kindAndMixinSchemes, uriToCategoryMap);
    
    // replace action URIs by their definitions :
    for (var scheme in kindAndMixinSchemes) {
      var kindAndMixins = kindAndMixinSchemes[scheme];
      for (var uri in kindAndMixins) {
        if ('actions' in kindAndMixins[uri]) {
          for (var i in kindAndMixins[uri].actions) {
            var actionDef = uriToCategoryMap[kindAndMixins[uri].actions[i]];
            if (actionDef) {
              kindAndMixins[uri].actions[i] = actionDef;
            }
          }
        }
      }
    }
    
    this.props.dispatch(actions.setCurrentSchemes(kindAndMixinSchemes));
  }

  updateBackendURL = () => {
    //we first reset the eventual previous message
    this.props.dispatch(actions.setOkMessage(''));

    // We retrieve the header tag and the header value
    var headtag = document.getElementById("header_tag").value; 
    var headval = document.getElementById("header_val").value; 
    //var heardersoptions='christophe';

    var heardersoptions;

    if (headtag.length==0 || headtag=="") {
     heardersoptions={};
    }
    else
    // Check if Basic Authorization
    if(headtag.indexOf("Authorization")>-1){
      if(headval.indexOf("Basic")>-1)
      {
        // Encode username:password in base64
        var userpaswd=headval.substring(headval.indexOf("Basic")+6);
        var base64encodedData = new Buffer(userpaswd).toString('base64');

        //var heardersoptions="Authorization : Basic "+base64encodedData;
        heardersoptions={'Authorization' : 'Basic '+base64encodedData};

      }
    }
    else
    {
      heardersoptions={headtag:headval};      
    }

    //var myval="test: ";
    //var chaine1=myval.concat(headtag).concat(" / ").concat(headval);

    
    //var user = 'admin';
    //var password = '1234';

    //var base64encodedData = new Buffer(user + ':' + password).toString('base64');

    //window.alert(heardersoptions);

    //we define this to auto toolify hyperlinks on the code view
    var navbar = this;

    var backendURL = $('.backendURL .text').text();

    if(!backendURL.match(/^http:\/\//) && !backendURL.match(/^https:\/\//)){
      navbar.props.dispatch(actions.setErrorMessage('The URL needs to begin with http:// or https://  '));
    }
    else{
      var getSchemes = this.getSchemes;
      $.ajax({
        url: '/conf?proxyTarget='+backendURL,
        type: 'GET',
        success: function(data){
          //we now make a test request to make sure the target is accessible
          callAPI(
            'GET',
            '/-/',
            (data, textStatus, request) => {
              window.backendURL = backendURL;
              var serverHeader = request.getResponseHeader('server');
              if (serverHeader.startsWith('erocci')) {
                window.backendCategoriesPrefix = window.conf.backendCategoriesPrefix_erocci; // #10 prefix queries by /categories/ in case of erocci only
              } else {
                window.backendCategoriesPrefix = window.conf.backendCategoriesPrefix_mart;
              }

              navbar.props.dispatch(actions.setOkMessage('You are now using '+backendURL));
              navbar.props.dispatch(actions.setCurrentQueryPath('/-/'));
              navbar.props.dispatch(actions.setCurrentJson(data));

              //we use that data to extract the schemes and their kinds
              getSchemes(data);
            },
            (xhr) => {
              navbar.props.dispatch(actions.setErrorMessage('Error connecting to '+backendURL));
            },
            heardersoptions
          );
        }
      });
    }
  }

  displayKind = (kind) => {
    var link = kindToCategoriesUrl(kind); // #10 prefixed by /categories/ in case of erocci only
    this.props.dispatch(actions.setCurrentQueryPath(link));
    this.props.dispatch(actions.setReadableCode());

    callAPI(
      'GET',
      link,
      (data) => {
        this.props.dispatch(actions.setCurrentJson(data));
      }
    )
  }

  render() {
    //we retrieve the kinds of each one of the scheme
    var schemes = [];
    for(var scheme in this.props.schemes){
      schemes.push(<div className="item" key={scheme}>
        <i className="dropdown icon"></i>
        <span className="text">{scheme}</span>
          <div className="menu">
            {this.props.schemes[scheme].map((kind, i) => {
              //if (!('actions' in kind)) {
                return <div className="item" onClick={() => this.displayKind(kind.term)} key={kind.term}>
                  {kind.term + (kind.title && kind.title.length != 0 ? ' - ' + kind.title : '')}
                </div>
              /*} else { // NOO actions have to be done ON A GIVEN RESOURCE so rather in data button
                return <div className="item" onClick={() => this.displayKind(kind.term)} key={kind.term}>
                  <i className="dropdown icon"></i>
                  <span className="text">{kind.term + ' - ' + kind.title}</span>
                  <div className="menu">
                    {kind.mcnactions.map((action, j) => {
                      return <div className="item" onClick={() => this.displayKind(kind.term)} key={action.term}>
                        {action.term + (action.title && action.title.length != 0 ? ' - ' + action.title : '')}
                      </div>
                    })}
                  </div>
                </div>
              }*/
            })}
          </div>
        </div>);
    }

    //we set the options of the backendURL
    var options = conf.serverPaths.map((path,i) => {
      return (
        <option value={path} key={i+path}>{path}</option>
      );
    })

    if(window.integratedVersion === false){
      var serverSelection = <div className="ui item">
              <select className="ui fluid search dropdown backendURL" name="backendURL"onChange={() => {}}>
                {options}
              </select>
		<input className="ui input headertag" placeholder="Header Tag" type="text" id="header_tag"></input>
		<input className="ui input headertag" placeholder="Header Value" type="text" id="header_val"></input>

            <button className="ui button useButton" onClick={this.updateBackendURL}>Use</button>
          </div>;
    }
    else{
      var serverSelection = null;
    }

    return (
      <div className="ui inverted menu navbar centered grid blue">
        <div className="ui container wrapNavbar">
          <a className="brand item largefont">OCCInterface</a>
          <a className="ui dropdown item">
            Select Kind
            <i className="dropdown icon"></i>
            <div className="menu">
              {schemes}
            </div>
          </a>
          <div className="ui item right navBarRight">
            {serverSelection}
          </div>
      <div className="ui item">
            <a href="https://github.com/occiware/OCCInterface" ><i className="big github icon"></i></a>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  currentURLServer: state.currentURLServer,
  schemes: state.currentSchemes
})

export default NavBar = connect(mapStateToProps)(NavBar);
