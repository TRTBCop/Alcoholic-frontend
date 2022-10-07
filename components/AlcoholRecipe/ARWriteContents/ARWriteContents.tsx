import { faArrowRotateBack, faCameraRetro, faTrashAlt, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, ChangeEventHandler, KeyboardEventHandler, MouseEventHandler, useCallback, useRef, useState } from 'react';
import styles from './ARWriteContents.module.scss'


const ARWriteContents = () => {
   
    const fileInput = React.useRef<HTMLInputElement>(null);
    const [file, setFile] = useState("");
    
    const [hashtag, setHashtag] = useState<string | ''>('');
    const [hashArr, setHashArr] = useState<string[] | []>([]);

    const [cocktailTitle , setRecipeTitle] = useState<string>('');
    const [recipeContent, setRecipeContent] = useState<string>('');
    const [cocktailConent , setcocktailConent] = useState<string>('');

    const [thumbnailCheck, setThumbnailCheck] = useState<boolean>(false);

    const onClickUpload = () => {
        fileInput.current?.click();
    }

    const saveImageUpload = (e : ChangeEvent<HTMLInputElement>) =>{
        if (e.target.files && e.target.files[0]) {
            setFile(URL.createObjectURL(e.target.files[0]));
            setThumbnailCheck(true);
        }
    }

    const deleteFileImage = () =>{
            setFile("");
            setThumbnailCheck(false);
    };

    const recipeNameOnChange = (e : ChangeEvent<HTMLInputElement>) => {
        setRecipeTitle(e.target.value);
    }

    const hashtagInputChange = (e : ChangeEvent<HTMLInputElement>) => {
        setHashtag(e.target.value.trim());
        console.log(hashtag)
    }
    
    const addHashTagKeyUp = useCallback((e :React.KeyboardEvent<HTMLInputElement>) =>{
        if (e.currentTarget.value.trim() !=="" && e.key ==="Enter"){
            if(hashArr.length < 4){
                setHashArr((hashArr) => [...hashArr, hashtag]);
                setHashtag("");
            }else{
                alert("최대 4개 까지 작성 가능합니다.");
            }
           
        }
        
    },[hashtag, hashArr])
    
    const removeHashTag = (e:React.MouseEvent<HTMLButtonElement>) => {
        setHashArr(hashArr.filter(hashtag => e.target !== hashtag));
    }

    return(
        <div className={styles.writeContainer}>
            {!thumbnailCheck &&
                <div className={styles.thumbnailInputBox}>
                    <h1>대표 사진</h1>
                    <button className={styles.thumbnailImgbtn} onClick={onClickUpload}>
                        <div className={styles.thumbnailDiv} >
                            <p><FontAwesomeIcon icon={faCameraRetro}/></p>
                            <h1>메인 사진 올리기</h1>
                            <span>( * 최대 1장 )</span>
                        </div>
                    </button>
                </div>
            }
            
            <div className={styles.imgPreviewBox}>
                {thumbnailCheck &&<h1>대표 사진</h1>}
                <div className={styles.imgPreview}>
                    <input
                        ref={fileInput}
                        type="file"
                        style={{display:"none"}}
                        multiple={false}
                        accept="image/*,.pdf"
                        onChange={saveImageUpload}
                    />
                    {file && <img src={file} />}

                    {thumbnailCheck && 
                        <div className={styles.imgTool}>
                            <button onClick={deleteFileImage}>
                                <FontAwesomeIcon icon={faTrashAlt}/>
                            </button>
                            <button onClick={onClickUpload}>
                                <FontAwesomeIcon icon={faArrowRotateBack}/>
                            </button>
                        </div>
                    }
                </div>
            </div>
            <div className={styles.titleBox}>
                <h1>칵테일 이름 <span>*</span></h1>
                <input 
                    type="text"
                    placeholder="칵테일 이름 작성해주세요."
                    onChange={recipeNameOnChange}
                />
            </div>
            <div className={styles.titleBox}>
                <h1>특징 태그 <span>(최대 4개)</span></h1>
                <input 
                    type="text" 
                    value={hashtag}
                    placeholder='tag를 입력 후,Enter를 누르세요'  
                    onChange={hashtagInputChange} 
                    onKeyUp={addHashTagKeyUp}
                />
                
                <div className={styles.hashTagBox}>
                    {hashArr && hashArr.map((item, i) => (
                        <button key={i} onClick={removeHashTag}>
                            <span>{item}</span>
                            <span><FontAwesomeIcon icon={faXmark}/></span>
                        </button>
                    ))}
                </div>
            </div>
            <div className={styles.editorbox}>
                <h1>술 설명 </h1>
                <textarea
                    name="cocktailMemo"
                    placeholder="술 설명"
                />
            </div>
            <div className={styles.editorbox}>
                <h1>레시피 <span>*</span></h1>
                <textarea
                    name="RecipeMemo"
                    placeholder="레시피 설명"
                />
            </div>
        </div>
    )
};

export default ARWriteContents;
