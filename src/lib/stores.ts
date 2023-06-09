import { writable } from 'svelte/store';

type PublicFiles = {
	[id: string]: {
		fileName: string;
		description: string;
		repo: string;
	};
};

export const PUBLIC_FILES = writable<PublicFiles>({
	emotettv: {
		fileName: 'emoteTTV.md',
		description: 'Interpretador de emotes da Twitch (BTTV e FFZ)',
		repo: 'doceazedo/emotettv'
	},
	'discord-invite': {
		fileName: 'discord-invite.md',
		description: 'Gerador de imagens de convite do Discord',
		repo: 'doceazedo/discord-invite'
	},
	fazendoca: {
		fileName: 'Fazendoca.md',
		description: 'Jogo social de fazendinha sendo desenvolvido na UE5',
		repo: 'doceazedo/fazendoca-ue5'
	},
	feministech: {
		fileName: 'Feministech.md',
		description: 'Redesign do site da comunidade com SvelteKit',
		repo: 'doceazedo/feministech'
	},
	guessify: {
		fileName: 'Guessify.md',
		description: 'Quiz online multiplayer com playlists do Spotify',
		repo: 'doceazedo/guessify'
	},
	overlay: {
		fileName: 'Overlay (e bot).md',
		description: 'Um conjunto com os visuais, comandos e afins das minhas lives',
		repo: 'doceazedo/overlay'
	},
	'overlay-v3': {
		fileName: 'Overlay V3.md',
		description: 'Futuro overlay e bot, super customizável e modular',
		repo: 'doceazedo/overlay'
	},
	website: {
		fileName: 'Site pessoal.md',
		description: 'Meu site pessoal e blog',
		repo: 'doceazedo/doceazedo.com'
	}
});
