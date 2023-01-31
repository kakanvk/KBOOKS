import DetailBox from "./DetailBox";
import "./index.css"

function AuthorDetail () {

    const fakeData = {
        birth: "02/03/1978", 
        homeTown: "USA", 
        mainCategory: "Tiểu thuyết", 
        featuredWorks: "Psylogy of Money", 
        other: "Một nhà văn kiệt xuất"
    }

    return(
        <div className="authorDetail">
            <div>

            </div>
            <div>
                <h2>Chi tiết</h2>
                <DetailBox data={fakeData}/>
            </div>
        </div>
    )
}

export default AuthorDetail;