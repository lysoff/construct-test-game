'use strict'
const C3 = globalThis

{
    C3.Plugins.PlaygamaBridge.Type = class PlaygamaBridgeType extends C3.ISDKObjectTypeBase {
        constructor() {
            super()
        }

        _onCreate() { }
    }
}
