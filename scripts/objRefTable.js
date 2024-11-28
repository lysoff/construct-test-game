const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.PlaygamaBridge,
		C3.Plugins.Button,
		C3.Plugins.Browser,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.PlaygamaBridge.Acts.AddActionParameter,
		C3.Plugins.PlaygamaBridge.Acts.AchievementsUnlock,
		C3.Plugins.PlaygamaBridge.Cnds.OnAchievementsUnlockCompleted,
		C3.Plugins.Browser.Acts.ConsoleLog,
		C3.Plugins.PlaygamaBridge.Exps.AchievementsCount,
		C3.Plugins.PlaygamaBridge.Cnds.IsLastActionCompletedSuccessfully,
		C3.Plugins.PlaygamaBridge.Acts.AchievementsGetList,
		C3.Plugins.PlaygamaBridge.Cnds.OnAchievementsGetListCompleted,
		C3.Plugins.PlaygamaBridge.Exps.AchievementsList,
		C3.Plugins.PlaygamaBridge.Acts.AchievementsShowNativePopup
	];
};
self.C3_JsPropNameTable = [
	{PlaygamaBridge: 0},
	{Unlock: 0},
	{Browser: 0},
	{GetList: 0},
	{ShowPopup: 0}
];

self.InstanceType = {
	PlaygamaBridge: class extends self.IInstance {},
	Unlock: class extends self.IButtonInstance {},
	Browser: class extends self.IInstance {},
	GetList: class extends self.IButtonInstance {},
	ShowPopup: class extends self.IButtonInstance {}
}