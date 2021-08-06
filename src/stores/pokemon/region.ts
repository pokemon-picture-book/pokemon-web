import { computed, InjectionKey, reactive } from 'vue';
import { State, Getter, Action } from '@/types/stores/pokemon/region';
import repository from '@/plugins/http/api/regions';

export const regionState = () => {
    const state: State = reactive({
        regions: [],
        selectedNames: []
    });

    const getter: Getter = {
        regions: computed(() => state.regions)
    };

    const action: Action = {
        fetchAll: async (lang) => {
            const { data } = await repository.findAll(lang);
            state.regions = data || [];
        },
        saveSelectedNames: (selectedNames) => {
            state.selectedNames = selectedNames;
        }
    };

    return {
        state,
        getter,
        action
    };
};

export type RegionStateType = ReturnType<typeof regionState>;
export const RegionStateKey: InjectionKey<RegionStateType> = Symbol('RegionState');

export default {};
