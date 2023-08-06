export const Statisticitem = ({ stats }) => {
    console.log()
    
 return (
    <>
        <span className="label">{stats.label}</span>
        <span className="percentage">{stats.percentage}%</span>
    </>
 
        
);
};