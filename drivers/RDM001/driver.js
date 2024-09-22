'use strict';

const { ZigBeeDriver } = require("homey-zigbeedriver");

class DualWallSwitch extends ZigBeeDriver {

    async onInit() {
        this.log('Device has been initialized');
      }

}

module.exports = DualWallSwitch;