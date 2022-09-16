<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
#boardlist{
	border-collapse: collapse; /* 이중테두리제거  */
	width: 100%
	
}

#boardlist>td,th{
	text-align: left;
	padding: 5px;
	width: 100px;
	height: 15px;
	text-align: center;
}
#boardlist>thead{
background: #999;
color:white;
}

#boardlist>tbody tr:nth-child(even){ /* 1번부터시작함 */
	background: pink;
}
#boardlist>tbody tr:hover{
	background: aliceblue;
}

.paging{
	text-align:center;
}

.paging a {
	text-decoration: none;
	display:inline-block;
	border: 1px solid #ccc;
	padding: 5px 8px;
	background-color: beige;
	font-weight: bold;
}
#writer{
	text-align: right;
	margin-bottom: 8px;
}

#writer>a{
	background: pink;
	padding: 3px;
	text-decoration: none;
}

</style>

</head>
<body>

<h3> 게시판 </h3>

<div id="writer">
<a href="index.jsp?contents=board/boardWriteForm">글쓰기</a>
</div>
<table id="boardlist">
	<thead>
		<tr>
			<th style="width:10%">번호</th>
			<th style="width:50%">제목</th>
			<th>작성자</th>
			<th>작성일</th>
			<th>조회수</th>
		</tr>
		</thead>
	<tbody>
		<tr>
			<td>4</td>
			<td><a href="#">재미있는 html</a></td>
			<td>홍길동</td><td>2022.8.31</td><td>10</td>
		</tr>
		<tr>
			<td>3</td>
			<td><a href="#">신나는 css 배우기</a></td>
			<td>심청이</td><td>2022.8.31</td><td>70</td>
		</tr>
		<tr>
			<td>2</td>
			<td><a href="#">js도 열심히</a></td>
			<td>두꺼비</td><td>2022.8.31</td><td>11</td>
		</tr>
		<tr>
			<td>1</td>
			<td><a href="#">공부합시다</a></td>
			<td>콩쥐</td><td>2022.8.31</td><td>13</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td colspan="5">
				<p class="paging">
					<a href="#">1</a>
					<a href="#">2</a>
					<a href="#">3</a>
					<a href="#">4</a>
					<a href="#">5</a>
				</p>
			</td>
		</tr>
	</tfoot>
</table>

<script src="js/content.js"></script>
</body>
</html>