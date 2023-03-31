import { useEffect, useState } from "react"

// // 3. Cleanup function luôn đc gọi trc khi callback đc gọi trừ lần component đc mounted
function ReviewAvt() {

    const [avatar, setAvatar] = useState()

    useEffect(() => { // Xử lí xoá avatar trong bộ nhớ tạm tránh rò rỉ bộ nhớ
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)

        e.target.files = null //up đc ảnh giống nhau
    } 

    return(
        <div id="app">
            <input 
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width='80%' />
            )}

        </div>
    )
}

export default ReviewAvt