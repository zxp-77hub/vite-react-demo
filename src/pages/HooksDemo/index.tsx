import DemoUseState from '@/pages/HooksDemo/DemoUseState';
import DemoUseEffect from '@/pages/HooksDemo/DemoUseEffect';
import DemoUseReducer from '@/pages/HooksDemo/DemoUseReducer';
import DemoUseRef from '@/pages/HooksDemo/DemoUseRef';
import DemoUseMemo from '@/pages/HooksDemo/DemoUseMemo';;
import DemoUseCallback from '@/pages/HooksDemo/DemoUseCallback';
import DemoUseContext from '@/pages/HooksDemo/DemoUseContext';
import DemoUseCapture from '@/pages/HooksDemo/DemoUseCapture';
import DemoUseDebugValue from '@/pages/HooksDemo/DemoUseDebugValue';
import DemoUseDeferredValue from '@/pages/HooksDemo/DemoUseDeferredValue';
import DemoUseLayoutEffect from '@/pages/HooksDemo/DemoUseLayoutEffect';
import DemoUseImperativeHandle from '@/pages/HooksDemo/DemoUseImperativeHandle';
import DemoUseSyncExternalStore from '@/pages/HooksDemo/DemoUseSyncExternalStore';
import DemoUseTransition from '@/pages/HooksDemo/DemoUseTransition';


export default function HooksDemo(){
  
  return<>
    <DemoUseState title='UseState'/>
    <DemoUseEffect title="UseEffect"/>
    <DemoUseReducer title='useReducer'/>
    <DemoUseRef title='useRef'/>
    <DemoUseMemo title='useMemo'/>
    <DemoUseCallback title='useCallback'/>
    <DemoUseContext title='useContext'/>
    <DemoUseCapture title='useCapture'/>
    <DemoUseDebugValue title='useDebugValue'/>
    <DemoUseDeferredValue title='useDeferredValue'/>
    <DemoUseLayoutEffect title='useLayoutEffect'/>
    <DemoUseImperativeHandle title='useImperativeHandle'/>
    <DemoUseSyncExternalStore title='useSyncExternalStore '/>
    <DemoUseTransition title='useTransition'/>
  </>
}


