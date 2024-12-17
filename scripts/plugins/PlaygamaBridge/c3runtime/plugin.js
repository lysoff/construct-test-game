'use strict'
const { C3 } = globalThis

{
    C3.Plugins.PlaygamaBridge = class PlaygamaBridgePlugin extends C3.ISDKPluginBase {
        constructor() {
            super()
        }
    }
}
