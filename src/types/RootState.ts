// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly
import { IAppState } from 'app/pages/types';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  appState: IAppState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
