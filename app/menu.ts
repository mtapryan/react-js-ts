import { app, shell } from 'electron';

const isMac = process.platform === 'darwin'
const menu = [
	// { role: 'appMenu' }
	...(isMac ? [{
		label: app.name,
		submenu: [
			{ role: 'about' },
			{ type: 'separator' },
			{ role: 'services' },
			{ type: 'separator' },
			{ role: 'hide' },
			{ role: 'hideothers' },
			{ role: 'unhide' },
			{ type: 'separator' },
			{ role: 'quit' }
		]
	}] : []),
	// { role: 'fileMenu' }
	{
		label: 'File',
		submenu: [
			isMac ? { role: 'close' } : { role: 'quit' }
		]
	},
	// { role: 'editMenu' }
	{
		label: 'Edit',
		submenu: [
			{ role: 'undo' },
			{ role: 'redo' },
			{ type: 'separator' },
			{ role: 'cut' },
			{ role: 'copy' },
			{ role: 'paste' },
			...(isMac ? [
				{ role: 'pasteAndMatchStyle' },
				{ role: 'delete' },
				{ role: 'selectAll' },
				{ type: 'separator' },
				{
					label: 'Speech',
					submenu: [
						{ role: 'startspeaking' },
						{ role: 'stopspeaking' }
					]
				}
			] : [
					{ role: 'delete' },
					{ type: 'separator' },
					{ role: 'selectAll' }
				])
		]
	},
	// { role: 'viewMenu' }
	{
		label: 'View',
		submenu: [
			{ role: 'reload' },
			{ role: 'forcereload' },
			{ role: 'toggledevtools' },
		]
	},
	// { role: 'windowMenu' }
	{
		label: 'Window',
		submenu: [
			{ role: 'minimize' },
			{ role: 'zoom' },
			...(isMac ? [
				{ type: 'separator' },
				{ role: 'front' },
				{ type: 'separator' },
				{ role: 'window' }
			] : [
					{ role: 'close' }
				])
		]
	},
	{
		role: 'help',
		submenu: [
			{
				label: 'Learn More',
				click: async () => {
					await shell.openExternal('https://github.com/SzybkiSasza/gdg-react-workshop')
				}
			}
		]
	}
] as Electron.MenuItemConstructorOptions[];

export default menu;
