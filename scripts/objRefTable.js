const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.PlaygamaBridge,
		C3.Plugins.Browser,
		C3.Plugins.Button,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.PlaygamaBridge.Acts.AchievementsGetList,
		C3.Plugins.Browser.Acts.ConsoleLog,
		C3.Plugins.PlaygamaBridge.Acts.AppendStorageDataSetRequest,
		C3.Plugins.PlaygamaBridge.Acts.SendStorageDataSetRequest,
		C3.Plugins.PlaygamaBridge.Acts.AppendStorageDataGetRequest,
		C3.Plugins.PlaygamaBridge.Acts.SendStorageDataGetRequest,
		C3.Plugins.PlaygamaBridge.Cnds.OnAchievementsGetListCompleted,
		C3.Plugins.PlaygamaBridge.Cnds.IsLastActionCompletedSuccessfully,
		C3.Plugins.PlaygamaBridge.Cnds.OnStorageDataSetRequestCompleted,
		C3.Plugins.PlaygamaBridge.Cnds.OnStorageDataGetRequestCompleted
	];
};
self.C3_JsPropNameTable = [
	{PlaygamaBridge: 0},
	{Browser: 0},
	{Button: 0},
	{SetButton: 0},
	{GetButton: 0}
];

self.InstanceType = {
	PlaygamaBridge: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Button: class extends self.IButtonInstance {},
	SetButton: class extends self.IButtonInstance {},
	GetButton: class extends self.IButtonInstance {}
}