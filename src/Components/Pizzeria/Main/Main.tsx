import './main.scss';
import { Routes, Route} from 'react-router-dom';
import Sushi from './Sushi/Sushi';
import Pizza from './Pizza/Pizza';
import Home from './Home/Home';
import About from './About/About';
import Vacancies from './Vacancies/Vacancies';
import Feedback from './Feedback/Feedback';
import Shared from './Shared/Shared';
import Admin from './Admin/Admin';
import Salate from './Salate/Salate';
import Bar from './Bar/Bar';
import NotPageFound from './NotPageFound/NotPageFound';

const Main = (props: { uptadeFoodkList: any; food: any; setFood: any; }) => {

    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/sushi' element={<Sushi uptadeFoodkList={props.uptadeFoodkList} food={props.food} setFood={props.setFood}/>}></Route>
            <Route path='/pizza' element={<Pizza uptadeFoodkList={props.uptadeFoodkList} />}></Route>
            <Route path='/salate' element={<Salate uptadeFoodkList={props.uptadeFoodkList}/>}></Route>
            <Route path='/bar' element={<Bar uptadeFoodkList={props.uptadeFoodkList}/>}></Route>
            <Route path='/shared' element={<Shared/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/feedback' element={<Feedback/>}></Route>
            <Route path='/vacancies' element={<Vacancies/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='/delivery'></Route>
            <Route path='/contacts'></Route>
            <Route path='*' element={<NotPageFound/>}></Route>
        </Routes>
    )
};

export default Main;