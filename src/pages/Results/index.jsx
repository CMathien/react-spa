import { useContext } from 'react'
import { SurveyContext } from '../../utils/context/index'

function Results() {
    const { answers } = useContext(SurveyContext);
    console.log(answers)
    return(
        <div>Resultats</div>
    )
}

export default Results