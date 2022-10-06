import router, { Router } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

import styles from './ARWriteNavBar.module.scss'
import { createAlcRecipe } from "@api/alcRecipe";


const ARWriteNavBar = () =>{

  const useConfirm = (message : string , onConfirm: () => void, onCancel: () => void) => {
      if (!onConfirm || typeof onConfirm !== "function") {
        return;
      }
      if (onCancel && typeof onCancel !== "function") {
        return;
      }
  
      const confirmAction = () => {
        if (window.confirm(message)) {
          onConfirm();
        } else {
          onCancel();
        }
      };
    
      return confirmAction;
    };

    const goBackConfirm = () => {
      router.push({
        pathname: `/alcoholrecipe`,
        query: {
        },
      });
    }

  const cancelConfirm = () => console.log("취소했습니다.");

  const confirmBackPage = useConfirm(
    "변경 내용이 사라지게 됩니다. 페이지를 나가시겠습니까?",
    goBackConfirm,
    cancelConfirm
  );


  const saveHandler = () => {}

  return (
    <div className={styles.arwriteNav}>
       <button onClick={saveHandler}>
          <h3>작성 완료</h3>
        </button>
        <button onClick={confirmBackPage}>
          <h3>목록</h3> 
        </button>
    </div>
  )
}

export default ARWriteNavBar;

/**
  const saveHandler = async () => {
  try {
    //const { data } = await createAlcRecipe();
  }

  if (data.code === 200) {
    alert('삭제되었어요');
    router.push('/alcoholhistory');
  } else {
    alert(`삭제가 정상적으로 진행되지 않았어요 에러코드: ${data.code}`);
  }
  Router.events.on('routeChangeStart', (url) =>{
    confirmBackPage;
  });

} 

    Router.events.on('routeChangeStart', (url) =>{

      alert(window.location.href);
      if(window.location.href == "/alcoholrecipe/write"){
        confirmBackPage
      }
      else return;
      
  });
*/