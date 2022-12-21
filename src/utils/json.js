export default {
  "networks": {
    "host": {
      "host-3df8-680a": {
        "config": {
          "cpu_core": 2,
          "disk_size": 40,
          "image_id": "42f463f6-8133-4954-9daf-4a524ba67ee0",
          "image_name": "PTDN_BUPT_DN_1.5",
          "ram": 4
        },
        "interfaces": {
          "host-3df8-680a-6da1-3fb2": {
            "deployed_nic_name": "",
            "mac": "",
            "name": "host-3df8-680a-6da1-3fb2",
            "port_type": 0
          }
        },
        "name": "host-3df8-680a",
        "nickname": "h1",
        "vm_id": "",
        "vm_ip": "",
        "vm_name": "",
        "x_axis": 106,
        "y_axis": 179
      },
      "host-da6a-990c": {
        "config": {
          "cpu_core": 2,
          "disk_size": 40,
          "image_id": "42f463f6-8133-4954-9daf-4a524ba67ee0",
          "image_name": "PTDN_BUPT_DN_1.5",
          "ram": 4
        },
        "interfaces": {
          "host-da6a-990c-de7e-5742": {
            "deployed_nic_name": "",
            "mac": "",
            "name": "host-da6a-990c-de7e-5742",
            "port_type": 0
          }
        },
        "name": "host-da6a-990c",
        "nickname": "h2",
        "vm_id": "",
        "vm_ip": "",
        "vm_name": "",
        "x_axis": 292,
        "y_axis": 371
      }
    },
    "links": {
      "link-7274-ce8c": {
        "config": {
          "link_spec": 10,
          "link_type": 0
        },
        "deployed_endpoint1": "",
        "deployed_endpoint2": "",
        "name": "link-7274-ce8c",
        "nickname": "h1-r1",
        "uuid_endpoint1": "host-3df8-680a",
        "uuid_endpoint1_port": "host-3df8-680a-6da1-3fb2",
        "uuid_endpoint2": "router-8a0a-a6e8",
        "uuid_endpoint2_port": "router-8a0a-a6e8-0488-3182"
      },
      "link-7cd7-2a92": {
        "config": {
          "link_spec": 10,
          "link_type": 0
        },
        "deployed_endpoint1": "",
        "deployed_endpoint2": "",
        "name": "link-7cd7-2a92",
        "nickname": "r1-s1",
        "uuid_endpoint1": "router-8a0a-a6e8",
        "uuid_endpoint1_port": "router-8a0a-a6e8-3c6f-db05",
        "uuid_endpoint2": "switch-d06a-0220",
        "uuid_endpoint2_port": "switch-d06a-0220-012f-0706"
      },
      "link-e065-4b92": {
        "config": {
          "link_spec": 10,
          "link_type": 0
        },
        "deployed_endpoint1": "",
        "deployed_endpoint2": "",
        "name": "link-e065-4b92",
        "nickname": "r1-h2",
        "uuid_endpoint1": "router-8a0a-a6e8",
        "uuid_endpoint1_port": "router-8a0a-a6e8-52ee-8f2a",
        "uuid_endpoint2": "host-da6a-990c",
        "uuid_endpoint2_port": "host-da6a-990c-de7e-5742"
      }
    },
    "meter": {},
    "router": {
      "router-8a0a-a6e8": {
        "config": {
          "cpu_core": 2,
          "disk_size": 40,
          "image_id": "42f463f6-8133-4954-9daf-4a524ba67ee0",
          "image_name": "PTDN_BUPT_DN_1.5",
          "ram": 4
        },
        "interfaces": {
          "router-8a0a-a6e8-0488-3182": {
            "deployed_nic_name": "",
            "mac": "",
            "name": "router-8a0a-a6e8-0488-3182",
            "port_type": 0
          },
          "router-8a0a-a6e8-3c6f-db05": {
            "deployed_nic_name": "",
            "mac": "",
            "name": "router-8a0a-a6e8-3c6f-db05",
            "port_type": 0
          },
          "router-8a0a-a6e8-52ee-8f2a": {
            "deployed_nic_name": "",
            "mac": "",
            "name": "router-8a0a-a6e8-52ee-8f2a",
            "port_type": 0
          }
        },
        "name": "router-8a0a-a6e8",
        "nickname": "r1",
        "vm_id": "",
        "vm_ip": "",
        "vm_name": "",
        "x_axis": 288.21532302734374,
        "y_axis": 174
      }
    },
    "switch": {
      "switch-d06a-0220": {
        "config": {
          "cpu_core": 2,
          "disk_size": 40,
          "image_id": "42f463f6-8133-4954-9daf-4a524ba67ee0",
          "image_name": "PTDN_BUPT_DN_1.5",
          "ram": 4
        },
        "interfaces": {
          "switch-d06a-0220-012f-0706": {
            "deployed_nic_name": "",
            "mac": "",
            "name": "switch-d06a-0220-012f-0706",
            "port_type": 0
          }
        },
        "name": "switch-d06a-0220",
        "nickname": "s1",
        "vm_id": "",
        "vm_ip": "",
        "vm_name": "",
        "x_axis": 493,
        "y_axis": 179
      }
    }
  },
  "topo": "12",
  "user": "chengdian"
}