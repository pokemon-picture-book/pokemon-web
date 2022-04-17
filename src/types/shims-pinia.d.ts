import 'pinia';
import { UnwrapRef } from 'vue';

declare module 'pinia' {
    type AppGetterTree<State = {}, KeyValue = {}> = {
        [K in keyof KeyValue]:
            | ((
                  state: UnwrapRef<State> & UnwrapRef<PiniaCustomStateProperties<State>>
              ) => KeyValue[K])
            | (() => KeyValue[K]);
    };
}
