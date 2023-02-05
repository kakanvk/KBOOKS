import "./index.css"

function DetailBox (props) {

    const {birth, homeTown, mainCategory, featuredWorks, other} = props.data;

    return (
        <div className="DetailBox">
            <div className="detail__item">
                <h4>Ngày sinh</h4>
                <span>{birth}</span>
            </div>
            <div className="detail__item">
                <h4>Quê quán</h4>
                <span>{homeTown}</span>
            </div>
            <div className="detail__item">
                <h4>Thể loại chính</h4>
                <span>{mainCategory}</span>
            </div>
            <div className="detail__item">
                <h4>Các tác phẩm nổi bật</h4>
                <span>{featuredWorks}</span>
            </div>
            <div className="detail__item">
                <h4>Khác</h4>
                <span style={{textAlign: "justify"}}>{other}</span>
            </div>
        </div>
    )
}

export default DetailBox;