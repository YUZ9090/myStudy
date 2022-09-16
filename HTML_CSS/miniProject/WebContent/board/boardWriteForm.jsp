<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h3>글쓰기</h3>

<form action="">
		<table border ="1" cellspacing="0" cellpadding="7">
			<tr>
				<td width="100"><label for="title">제목 </label></td>
				<td><input type="text" name="title" id="title" placeholder="제목을 입력하세요" size="30" required/>
				</td>
			</tr>
			<tr>
				<td><label for="contents">내용 </label></td>
				<td><textarea name="contents" id="contents" placeholder="내용을 입력하세요" cols="50" rows="10"  required></textarea>
				</td>
			</tr>
			<tr>
			<td colspan="2" style="text-align: center;" >
				<button >글쓰기</button>
				<input type="reset" value="다시작성" />
				<button type="button" onclick="location.href='index.jsp?contents=board/boardList'">목록</button>
			</td>
				
			</tr>
		</table>

	

</form>
</body>
</html>