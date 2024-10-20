<div align="center">

# Source Code Scanner OCR
**소스 코드 스캐너 OCR**<br>
Image to text

<div>
  <img src="img/test.png" width="400px" height="auto">
  <br>⬇️<br>
  <img src="img/test_result.jpeg" width="500px" height="auto">
</div>

</div>


## 개요 | Outline

소스 코드가 적힌 이미지를 광학 문자 인식(Optical Character Recognition) 기술로 스캔 후, 코드 텍스트 형식으로 표시해주는 프로그램입니다. 출력된 코드는 전문을 그대로 복사할 수 있습니다.

이런 상황에서 유용합니다!
* 소스코드가 종이 출력물 상태로만 있을 때
* 소스코드가 PDF 파일 형식으로만 있을 때
* 캡처한 소스코드를 텍스트 형식으로 얻고 싶을 때
* 손으로 적은 소스코드를 텍스트 형식으로 얻고 싶을 때

The program scans images containing source code using Optical Character Recognition (OCR) technology and displays the code textually. The outputted code can be copied as is.

This is useful in these situations!
* When the source code exists only in hard copy format.
* When the source code exists only in PDF file format.
* When you want to obtain captured source code in text format.
* When you want to obtain handwritten source code in text format.

## 사용법 | How to use

<div align="center">

➡️[This Link](https://gitpage.mintsclover.com/source-code-scanner/)⬅️

**이 링크에서 사용할 수 있습니다.**<br>
**You can find it here**

</div>

1. 이미지를 첨부하기 전, 이미지에 적힌 언어 종류를 선택하세요.<br>Please select the language of the text written in the image before attaching it.
2. 소스 코드가 적힌 이미지를 첨부하세요.<br>Attach the image containing the source code.
3. 결과를 확인하고 복사하세요!<br>Check the result and copy the text!

## 작동 원리 | How it works

본 프로그램은 [tesseract](https://github.com/tesseract-ocr/tesseract)와 [js-beautify](https://github.com/beautifier/js-beautify)가 사용되었습니다. tesseract가 이미지 파일 내 텍스트를 인식해 텍스트로 반환하고, js-beautify가 이를 가독성 좋게 정렬합니다.

This program utilizes [Tesseract](https://github.com/tesseract-ocr/tesseract) and [js-beautify](https://github.com/beautifier/js-beautify). Tesseract is used to recognize text within image files and convert it into text format, while js-beautify formats the text for better readability.

## 기타자료 | Other data

<details close>
  <summary>-</summary>
  -
</details>
