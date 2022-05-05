import { defineStore, acceptHMRUpdate, _GettersTree } from 'pinia';
import {
    SearchPokemonParamState,
    SearchPokemonParamGetter,
    SearchPokemonParamAction
} from '@/stores/search/pokemon-param/type';

// default parameter
const LANGUAGE = 'ja-Hrkt';
const GAME = 'rgby';
const REGIONS = ['kanto'];

export const useSearchPokemonParamStore = defineStore<
    string,
    SearchPokemonParamState,
    SearchPokemonParamGetter,
    SearchPokemonParamAction
>({
    id: 'pokemon-param',

    state: () => ({
        _language: LANGUAGE,
        _game: GAME,
        _regions: REGIONS,
        _infiniteIndex: 1
    }),

    getters: {
        /**
         * @returns {SearchPokemonParamState}
         */
        all: (state) => structuredClone(state),
        /**
         * @returns {string}
         */
        language: (state) => state._language,
        /**
         * @returns {string}
         */
        game: (state) => state._game,
        /**
         * @returns {string[]}
         */
        regions: (state) => state._regions,
        /**
         * @returns {number}
         */
        infiniteIndex: (state) => state._infiniteIndex
    },

    actions: {
        /**
         * 全てのパラメータセット.
         * @param language 言語パラメータ
         * @param game ゲームパラメータ
         * @param regions 地域パラメータ
         * @param infiniteIndex 無限スクロールインデックス
         */
        setAll(language, game, regions, infiniteIndex = 1) {
            this._language = language || LANGUAGE;
            this._game = game || GAME;
            this._regions = regions && regions.length ? regions : REGIONS;
            this._infiniteIndex = infiniteIndex;
        },
        /**
         * 言語のパラメータセット.
         * @param language 言語パラメータ
         */
        setLanguage(language) {
            this._language = language || LANGUAGE;
        },
        /**
         * ゲームのパラメータセット.
         * @param game ゲームパラメータ
         */
        setGame(game) {
            this._game = game || GAME;
        },
        /**
         * 地域のパラメータセット.
         * @param regions 地域パラメータ
         */
        setRegions(regions = REGIONS) {
            this._regions = regions && regions.length ? regions : REGIONS;
        },
        /**
         * 無限スクロールインデックスのパラメータセット.
         * @param infiniteIndex 無限スクロールインデックスパラメータ
         */
        setInfiniteIndex(infiniteIndex = 1) {
            this._infiniteIndex = infiniteIndex;
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSearchPokemonParamStore, import.meta.hot));
}
