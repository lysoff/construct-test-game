const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.PlaygamaBridge,
		C3.Plugins.Browser,
		C3.Plugins.Button,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.PlaygamaBridge.Acts.AchievementsShowNativePopup,
		C3.Plugins.PlaygamaBridge.Cnds.OnAchievementsShowNativePopupCompleted,
		C3.Plugins.Browser.Acts.ConsoleLog
	];
};
self.C3_JsPropNameTable = [
	{PlaygamaBridge: 0},
	{Browser: 0},
	{Button: 0}
];

self.InstanceType = {
	PlaygamaBridge: class extends self.C3.Plugins.PlaygamaBridge.Instance {},
	Browser: class extends self.IInstance {},
	Button: class extends self.IButtonInstance {}
}