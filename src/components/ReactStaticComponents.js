
import  Customers from "./Customers"
import  Dashboard  from "./Dashboard"
import  Reviews from "./Reviews";
import  Settings from "./Settings";
import  Widgets from './Widget';
import OnlineAnalysis from "./OnlineAnalysis";


function ReactStaticComponents () {
    return (
    <div className='ReactStaticComponents'>
       <Dashboard />
      <Customers />
      <OnlineAnalysis />
      <Reviews />
      <Settings />
      <Widgets />
 
    </div>
  );
  
}
    
    export default ReactStaticComponents;