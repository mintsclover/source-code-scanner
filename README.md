<div align="center">

# Source Code Scanner
**소스코드 스캐너**<br>

<a href="https://kevalsil.com/source-code-scanner/" target="_blank">
  <img src="main.svg" width="auto" height="auto">
</a>

</div>


## 개요 | Outline

소스 코드가 적힌 이미지를 스캔 후 텍스트 형식으로 표시해주는 프로그램입니다. 텍스트는 코드 정렬이 이루어진 채로 출력되며, 전문을 그대로 복사할 수 있습니다.

이런 상황에서 유용합니다!
* 소스코드가 종이 출력물 상태로만 있을 때
* 소스코드가 PDF 파일 형식으로만 있을 때
* 소스코드가 복사가 안돼서 캡쳐했을 때

It is a program that scans images with source codes and displays them in text format. Text is printed with code alignment, and you can copy the full text.

It's useful in this situation!
* When the source code is in the paper print state only
* When source code is in PDF file format only
* When I captured the source code because it wasn't copied

## 사용법 | How to use

<div align="center">

➡️[This Link](https://kevalsil.com/source-code-scanner/)⬅️

**이 링크에서 사용할 수 있습니다.**<br>
**It is available on this link.**

</div>

1. 이미지를 첨부하기 전, 이미지에 적힌 언어 종류를 선택하세요.<br>Before attaching the image, select the type of language written on the image.
2. 소스 코드가 적힌 이미지를 첨부하세요.<br>Attach an image with the source code.
3. 결과를 확인하고 복사하세요!<br>Check and copy the results!

## 작동 원리 | How it works

본 프로그램은 [tesseract](https://github.com/tesseract-ocr/tesseract)와 [js-beautify](https://github.com/beautifier/js-beautify)가 사용되었습니다. tesseract가 이미지 파일 내 텍스트를 인식해 텍스트로 반환하고, js-beautify가 이를 가독성 좋게 정렬합니다.

This program uses [tesseract](https://github.com/tesseract-ocr/tesseract) and [js-beauty](https://github.com/beautifier/js-beautify). Tesseract recognizes the text in the image file and returns it as text, and js-beauty sorts it readably.

## 기타자료 | Other data

<details close>
  <summary>-</summary>
  -
</details>
