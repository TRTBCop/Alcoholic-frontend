import styles from './ResultList.module.css';

interface SearchData {
    id: number;
    text: string;
}
const ResultList = ({ data, props }: { data: SearchData[], props: any}) => {
        //create a new array by filtering the original array
        const filteredData = data.filter((el) => {
            //if no input the return the original
            if (props === '') return null;
            //return the item which contains the user input
            else return el.text.toLowerCase().includes(props)
        })
    return (
        <ul className={styles.searchList}>
            {filteredData?.map((item: SearchData) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
};

export default ResultList;