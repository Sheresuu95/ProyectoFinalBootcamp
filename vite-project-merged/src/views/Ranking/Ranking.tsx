import CardRanking from "../../components/common/CardRanking"
import { UserProvider } from "../../components/common/UserContext"

function Ranking() {
  return (
    <UserProvider>
      <div id="root">
      <CardRanking />
      </div>
    </UserProvider>
        
  )
}

export default Ranking





