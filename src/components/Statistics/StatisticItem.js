export const Statisticitem = ({stats})=>{
    
 return (
    <>
        <span className="label">{stats.label}</span>
        <span className="percentage">{stats.percentage}%</span>
    </>
 
        
);
};