import { computed, InjectionKey, reactive } from 'vue';
import http from '@/plugins/http';
import { RegionResponse, State, Getter, Action } from '@/stores/http/regions/type';

export const regionState = () => {
    const state: State = reactive({
        regions: []
    });

    const getter: Getter = {
        regions: computed(() => state.regions)
    };

    const action: Action = {
        fetchAll: async (lang) => {
            const { data } = await http
                .get<RegionResponse[]>('regions', { params: { lang } })
                .catch((err) => {
                    throw err;
                });
            state.regions = data || [];
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
