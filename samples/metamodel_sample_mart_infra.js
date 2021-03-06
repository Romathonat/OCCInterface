{
  "model" : [ {
    "id" : "http://schemas.ogf.org/occi/core#",
    "kinds" : [ {
      "term" : "entity",
      "scheme" : "http://schemas.ogf.org/occi/core#",
      "title" : "Entity type",
      "attributes" : {
        "occi.core.title" : {
          "mutable" : true,
          "required" : false,
          "type" : "string",
          "description" : "The display name of the instance.",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "occi.core.id" : {
          "mutable" : false,
          "required" : true,
          "type" : "string",
          "description" : "The unique identity of the instance.",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        }
      },
      "location" : "/entity/",
      "actions" : [ ]
    }, {
      "term" : "resource",
      "scheme" : "http://schemas.ogf.org/occi/core#",
      "title" : "Resource",
      "attributes" : {
        "occi.core.summary" : {
          "mutable" : true,
          "required" : false,
          "type" : "string",
          "description" : "A summarising description of the Resource instance.",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        }
      },
      "parent" : "http://schemas.ogf.org/occi/core#entity",
      "location" : "/resource/",
      "actions" : [ ]
    }, {
      "term" : "link",
      "scheme" : "http://schemas.ogf.org/occi/core#",
      "title" : "Link",
      "attributes" : { },
      "parent" : "http://schemas.ogf.org/occi/core#entity",
      "location" : "/link/",
      "actions" : [ ]
    } ],
    "mixins" : [ ],
    "actions" : [ ]
  }, {
    "id" : "http://schemas.ogf.org/occi/infrastructure#",
    "kinds" : [ {
      "term" : "network",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure#",
      "title" : "Network Resource",
      "attributes" : {
        "occi.network.vlan" : {
          "mutable" : true,
          "required" : false,
          "type" : "number",
          "description" : "802.1q VLAN Identifier (e.g., 343)",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "",
            "type" : "number"
          }
        },
        "occi.network.label" : {
          "mutable" : true,
          "required" : false,
          "type" : "string",
          "description" : "Tag based VLANs (e.g., external-dmz)",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "occi.network.state.message" : {
          "mutable" : false,
          "required" : false,
          "type" : "string",
          "description" : "Human-readable explanation of the current instance state",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "occi.network.state" : {
          "mutable" : false,
          "required" : true,
          "type" : "string",
          "description" : "Current state of the instance",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          },
          "default" : "inactive"
        }
      },
      "parent" : "http://schemas.ogf.org/occi/core#resource",
      "location" : "/network/",
      "actions" : [ "http://schemas.ogf.org/occi/infrastructure/network/action#up", "http://schemas.ogf.org/occi/infrastructure/network/action#down" ]
    }, {
      "term" : "compute",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure#",
      "title" : "Compute Resource",
      "attributes" : {
        "occi.compute.memory" : {
          "mutable" : true,
          "required" : false,
          "type" : "number",
          "description" : "Maximum RAM in gigabytes allocated to the instance",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "",
            "type" : "number"
          }
        },
        "occi.compute.hostname" : {
          "mutable" : true,
          "required" : false,
          "type" : "string",
          "description" : "Fully Qualified DNS hostname for the instance",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "occi.compute.state" : {
          "mutable" : false,
          "required" : true,
          "type" : "string",
          "description" : "Current state of the instance",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          },
          "default" : "inactive"
        },
        "occi.compute.share" : {
          "mutable" : true,
          "required" : false,
          "type" : "number",
          "description" : "Relative number of CPU shares for the instance",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "",
            "type" : "number"
          }
        },
        "occi.compute.cores" : {
          "mutable" : true,
          "required" : false,
          "type" : "number",
          "description" : "Number of CPU cores assigned to the instance",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "",
            "type" : "number"
          }
        },
        "occi.compute.state.message" : {
          "mutable" : false,
          "required" : false,
          "type" : "string",
          "description" : "Human-readable explanation of the current instance state",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "occi.compute.architecture" : {
          "mutable" : true,
          "required" : false,
          "type" : "string",
          "description" : "CPU Architecture of the instance",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "occi.compute.speed" : {
          "mutable" : true,
          "required" : false,
          "type" : "number",
          "description" : "CPU Clock frequency (speed) in gigahertz",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "",
            "type" : "number"
          }
        }
      },
      "parent" : "http://schemas.ogf.org/occi/core#resource",
      "location" : "/compute/",
      "actions" : [ "http://schemas.ogf.org/occi/infrastructure/compute/action#start", "http://schemas.ogf.org/occi/infrastructure/compute/action#stop", "http://schemas.ogf.org/occi/infrastructure/compute/action#restart", "http://schemas.ogf.org/occi/infrastructure/compute/action#suspend", "http://schemas.ogf.org/occi/infrastructure/compute/action#save" ]
    }, {
      "term" : "storage",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure#",
      "title" : "Storage Resource",
      "attributes" : {
        "occi.storage.size" : {
          "mutable" : true,
          "required" : true,
          "type" : "number",
          "description" : "Storage size of the instance in gigabytes",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "",
            "type" : "number"
          }
        },
        "occi.storage.state" : {
          "mutable" : false,
          "required" : true,
          "type" : "string",
          "description" : "Current status of the instance",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "occi.storage.state.message" : {
          "mutable" : false,
          "required" : false,
          "type" : "string",
          "description" : "Human-readable explanation of the current instance state",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        }
      },
      "parent" : "http://schemas.ogf.org/occi/core#resource",
      "location" : "/storage/",
      "actions" : [ "http://schemas.ogf.org/occi/infrastructure/storage/action#online", "http://schemas.ogf.org/occi/infrastructure/storage/action#offline" ]
    }, {
      "term" : "storagelink",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure#",
      "title" : "StorageLink Link",
      "attributes" : {
        "occi.storagelink.deviceid" : {
          "mutable" : true,
          "required" : true,
          "type" : "string",
          "description" : "Device identifier as defined by the OCCI service provider",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "occi.storagelink.state" : {
          "mutable" : false,
          "required" : true,
          "type" : "string",
          "description" : "Current status of the instance",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "occi.storagelink.state.message" : {
          "mutable" : false,
          "required" : false,
          "type" : "string",
          "description" : "Human-readable explanation of the current instance state",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "occi.storagelink.mountpoint" : {
          "mutable" : true,
          "required" : false,
          "type" : "string",
          "description" : "Point to where the storage is mounted in the guest OS",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        }
      },
      "parent" : "http://schemas.ogf.org/occi/core#link",
      "location" : "/storagelink/",
      "actions" : [ ]
    }, {
      "term" : "networkinterface",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure#",
      "title" : "NetworkInterface Link",
      "attributes" : {
        "occi.networkinterface.interface" : {
          "mutable" : false,
          "required" : true,
          "type" : "string",
          "description" : "Identifier that relates the link to the link's device interface",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "occi.networkinterface.state.message" : {
          "mutable" : false,
          "required" : false,
          "type" : "string",
          "description" : "Human-readable explanation of the current instance state",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "occi.networkinterface.mac" : {
          "mutable" : true,
          "required" : true,
          "type" : "string",
          "description" : "MAC address associated with the link's device interface",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "occi.networkinterface.state" : {
          "mutable" : false,
          "required" : true,
          "type" : "string",
          "description" : "Current status of the instance",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        }
      },
      "parent" : "http://schemas.ogf.org/occi/core#link",
      "location" : "/networkinterface/",
      "actions" : [ ]
    } ],
    "mixins" : [ {
      "term" : "ipnetwork",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure/network#",
      "title" : "An IP Networking Mixin",
      "attributes" : {
        "occi.network.allocation" : {
          "mutable" : true,
          "required" : false,
          "type" : "string",
          "description" : "Address allocation mechanism: dynamic e.g., uses the dynamic host configuration protocol, static e.g., uses user supplied static network configurations",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "occi.network.address" : {
          "mutable" : true,
          "required" : false,
          "type" : "string",
          "description" : "Internet Protocol (IP) network address (e.g., 192.168.0.1/24, fc00::/7)",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "occi.network.gateway" : {
          "mutable" : true,
          "required" : false,
          "type" : "string",
          "description" : "Internet Protocol (IP) network address (e.g., 192.168.0.1, fc00::)",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        }
      },
      "location" : "/ipnetwork/",
      "actions" : [ ]
    }, {
      "term" : "ipnetworkinterface",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure/networkinterface#",
      "title" : "IP NetworkInterface Mixin",
      "attributes" : {
        "occi.networkinterface.gateway" : {
          "mutable" : true,
          "required" : false,
          "type" : "string",
          "description" : "Internet Protocol (IP) network address (e.g., 192.168.0.1/24, fc00::/7)",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "occi.networkinterface.allocation" : {
          "mutable" : true,
          "required" : true,
          "type" : "string",
          "description" : "Address mechanism: dynamic e.g., uses the dynamic host configuration protocol, static e.g., uses user supplied static network configurations",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "occi.networkinterface.address" : {
          "mutable" : true,
          "required" : true,
          "type" : "string",
          "description" : "Internet Protocol (IP) network address (e.g., 192.168.0.1/24, fc00::/7) of the link",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        }
      },
      "location" : "/ipnetworkinterface/",
      "actions" : [ ]
    }, {
      "term" : "os_tpl",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure#",
      "title" : "OS Template",
      "attributes" : { },
      "location" : "/os_tpl/",
      "actions" : [ ]
    }, {
      "term" : "resource_tpl",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure#",
      "title" : "Resource template",
      "attributes" : { },
      "location" : "/resource_tpl/",
      "actions" : [ ]
    }, {
      "term" : "ssh_key",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure/credentials#",
      "title" : "Credentials Mixin",
      "attributes" : {
        "occi.credentials.ssh.publickey" : {
          "mutable" : true,
          "required" : true,
          "type" : "string",
          "description" : "The contents of the public key file to be injected into the Compute Resource",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        }
      },
      "location" : "/ssh_key/",
      "actions" : [ ]
    }, {
      "term" : "user_data",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure/compute#",
      "title" : "Contextualization Mixin",
      "attributes" : {
        "occi.compute.userdata" : {
          "mutable" : false,
          "required" : true,
          "type" : "string",
          "description" : "Contextualization data (e.g., script, executable) that the client supplies once and only once. It cannot be updated",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        }
      },
      "location" : "/user_data/",
      "actions" : [ ]
    } ],
    "actions" : [ {
      "term" : "up",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure/network/action#",
      "attributes" : { }
    }, {
      "term" : "down",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure/network/action#",
      "attributes" : { }
    }, {
      "term" : "start",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure/compute/action#",
      "title" : "Start the system",
      "attributes" : { }
    }, {
      "term" : "stop",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure/compute/action#",
      "title" : "Stop the system (graceful, acpioff or poweroff)",
      "attributes" : {
        "method" : {
          "mutable" : true,
          "required" : true,
          "type" : "string",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        }
      }
    }, {
      "term" : "restart",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure/compute/action#",
      "title" : "Restart the system (graceful, warm or cold)",
      "attributes" : {
        "method" : {
          "mutable" : true,
          "required" : true,
          "type" : "string",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        }
      }
    }, {
      "term" : "suspend",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure/compute/action#",
      "title" : "Suspend the system (hibernate or in RAM)",
      "attributes" : {
        "method" : {
          "mutable" : true,
          "required" : true,
          "type" : "string",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        }
      }
    }, {
      "term" : "save",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure/compute/action#",
      "title" : "Save the system (hot, deferred)",
      "attributes" : {
        "method" : {
          "mutable" : true,
          "required" : true,
          "type" : "string",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        },
        "name" : {
          "mutable" : true,
          "required" : true,
          "type" : "string",
          "pattern" : {
            "$schema" : "http://json-schema.org/draft-04/schema#",
            "pattern" : "\\S+",
            "type" : "string"
          }
        }
      }
    }, {
      "term" : "online",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure/storage/action#",
      "title" : "Set storage online",
      "attributes" : { }
    }, {
      "term" : "offline",
      "scheme" : "http://schemas.ogf.org/occi/infrastructure/storage/action#",
      "title" : "Set storage offline",
      "attributes" : { }
    } ]
  } ]
}
