import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import styles from './ARWriteContents.module.scss'


const ARWriteContents = () => {
   
    const fileInput = React.useRef<HTMLInputElement >(null);


    const onClickUpload = () => {

        fileInput.current?.click();
      
    }

    const onChangeHashtag = (event : ChangeEvent) => {
    }




    return(
        <div className={styles.writeContainer}>
            <div className={styles.thumbnailImgBox}>
                <h1>대표 사진</h1>
                <button className={styles.thumbnailImgbtn} onClick={onClickUpload}>
                    <div className={styles.thumbnailDiv} >
                        <p><FontAwesomeIcon icon={faCameraRetro}/></p>
                        <h1>메인 사진 올리기</h1>
                        <span>( * 최대 1장 )</span>
                    </div>
                    <input
                        ref={fileInput}
                        type="file"
                        style={{display:"none"}}
                        multiple={false}
                    />
                </button>
                <div>
                    <img src ="" alt=""></img>
                </div>
            </div>
            <div className={styles.titleBox}>
                <h1>칵테일 이름 <span>*</span></h1>
                <input 
                    type="text"
                    placeholder="칵테일 이름 작성해주세요."
                />
            </div>
            <div className={styles.titleBox}>
                <h1>특징 태그 <span>(최대 4개)</span></h1>
                <input 
                    type="text" 
                    placeholder='tag를 입력 후,Enter를 누르세요'   
                />
            </div>
            <div className={styles.editorbox}>
                <h1>술 설명 </h1>
                <textarea
                    name="memo"
                    placeholder="술 설명"
                />
            </div>
            <div className={styles.editorbox}>
                <h1>레시피 <span>*</span></h1>
                <textarea
                    name="memo"
                    placeholder="레시피 설명"
                />
            </div>
        </div>
    )
};

export default ARWriteContents;

/*
    const [hashtag, setHashtag] = useState<string | ''>('');
    const [hashArr, setHashArr] = useState<string[] | []>([]);

    const [recipeTitle , setRecipeTitle] = useState<string>('');
    const [recipeContent, setRecipeContent] = useState<string>('');

    const selectFile = React.createRef();

    const createHashTag=(event: KeyboardEvent)=>{
        console.log(event.target);
    }
    const createHashTag = useCallback(
        (event:KeyboardEvent) => {

            if (process.browser) {
            const $HashWrapOuter = document.querySelector('.HashWrapOuter')
            const $HashWrapInner = document.createElement('div')
            $HashWrapInner.className = 'HashWrapInner'
            
            $HashWrapInner.addEventListener('click', () => {
                $HashWrapOuter?.removeChild($HashWrapInner)
                console.log($HashWrapInner.innerHTML)
                setHashArr(hashArr.filter((hashtag) => hashtag))
            })
    
             enter 키 코드 :13 
            if (event.keyCode === 13 && event.target.value.trim() !== '') {
                console.log('Enter Key 입력됨!', e.target.value)
                $HashWrapInner.innerHTML = '#' + e.target.value
                $HashWrapOuter?.appendChild($HashWrapInner)
                setHashArr((hashArr) => [...hashArr, hashtag])
                setHashtag('')
            }
            
            }
        },[hashtag, hashArr]
    )
    **/