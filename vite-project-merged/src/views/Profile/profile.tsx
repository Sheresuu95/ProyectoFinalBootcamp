import { UserProvider } from "../../components/common/UserContext"
import UserProfile from "../../components/common/UserProfile"


function Profile() {
  return (
    <div id="root">
    <UserProvider>
      <UserProfile />
    </UserProvider>
  </div>
  )
}

export default Profile