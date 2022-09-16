<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<style type="text/css">
#menubar{
	margin: 0 auto;
	text-align:center;
	background: #add;
	
}


#menubar ul li{
	display: inline-block;
	list-style-type: none;
	padding: 5px 15px;
	
	transition: 0.5s;
}

#menubar ul li:hover{
	background: #fdd;
	color:violet;

}

#menubar ul li a {
	color:white;
	text-decoration: none;
}

#menubar ul li:hover a{
	color:#add;
}


</style>

</head>
<body>

<div id="menubar">
	<ul>
		<li><a href="index.jsp?contents=member/writeForm">회원가입</a></li>
		<li><a href="#">로그아웃</a></li>
		<li><a href="#">회원정보수정</a></li>
		<li><a href="index.jsp?contents=board/boardWriteForm">글쓰기</a></li>
		<li><a href="index.jsp?contents=board/boardList">목록</a></li>
	</ul>
</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>


</body>
</html>