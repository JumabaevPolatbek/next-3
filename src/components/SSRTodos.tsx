import { useAppSelector } from "../redux/hook";
import Todos from "./Todos";

function SSRTodos(){
    const todos = useAppSelector(state=>state["Todo-List"].todos)
    return <Todos todos={todos}/>
}
export default SSRTodos