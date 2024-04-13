import { create } from 'zustand'

export const globalStore = create((set: any) => ({
	header: {
		type: 'none',
		title: '',
		back: false,
		menu: false,
		close: false,
		trash: false
	},
	footer: {
		fixed: false,
		reple: false,
		class:''
	},
	reple: {
		fixed: false,
	},
	gnb: {
		open: false,
	},
	menubar: {
		fixed: false,
	},

	setHeader: (args: any) => {
		set((prev: any) => ({
			...prev,
			header: { ...prev.header, ...args },
		}))
	},
	setFooter: (args: any) => {
		set((prev: any) => ({
			...prev,
			footer: { ...prev.footer, ...args },
		}))
	},
	setGnb: (args: any) => set({ gnb: { ...args } }),
	setMenubar: (args: any) => set({ menubar: { ...args } }),
}))
