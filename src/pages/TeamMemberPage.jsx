import { NavLink} from "react-router-dom";

export const TeamMemberPage = () => {

  return (
    <div>
        <div className="container">
            <div className="box">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, sit excepturi. Non voluptatibus facere quibusdam impedit culpa eum magnam doloribus in autem, temporibus repellendus voluptatem doloremque nulla praesentium, veritatis, tempora fugit error consequuntur? Ex facere facilis, pariatur porro quaerat natus inventore distinctio quisquam dicta maxime vitae? Dolorum similique nam eveniet amet consequatur laborum suscipit veritatis ut ipsam ad magnam atque ea, qui nisi cumque possimus cum perspiciatis et non, aliquam sed quis saepe. Tenetur fuga ducimus voluptatum facere nulla saepe, sapiente dolore, ea ullam totam corporis repellendus corrupti, eum unde architecto quis porro fugiat rem reprehenderit illum voluptas? Ut, velit?</p>
                <NavLink to={`/TeamPage`}>Back</NavLink>
            </div>
        </div>
    </div>
  )
  
}
export default TeamMemberPage;