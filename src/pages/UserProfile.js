import { useOutletContext, useParams } from "react-router-dom";

function UserProfile() {
  const params = useParams();
  const users = useOutletContext();
 
  const user = users.find(user => user.id === params.id);
  console.log('I am a user: ', user)

  if(!user){
    return <h1>Loading...</h1>;
  };

  return(  
      <aside>
        <h1>{user.name}</h1>
      </aside>
  );
};

export default UserProfile;