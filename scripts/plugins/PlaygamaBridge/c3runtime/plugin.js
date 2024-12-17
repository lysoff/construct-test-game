'use strict'
const C3 = globalThis

console.log(C3)

{
    C3.Plugins.PlaygamaBridge = class PlaygamaBridgePlugin extends C3.ISDKPluginBase {
        constructor() {
            super()
        }
    }
}
