class Theme {
	private _theme: string|null = $state(null);

  constructor() {
	this._theme = 'night';
  }

  getTheme():(string|null) {
	  return this._theme;
  }

  setTheme(theme:string) {
	this._theme = theme
  }

  toggleTheme() {
    this._theme = this._theme === 'night' ? 'corporate' : 'night';
  }
}

export const theme = new Theme();