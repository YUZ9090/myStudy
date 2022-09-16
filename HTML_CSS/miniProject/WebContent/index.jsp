<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
	String contents = request.getParameter("contents");
	String contentsPage = "template/body";
	if(contents != null){
		contentsPage = contents;
	}
	contentsPage += ".jsp";
%>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="template/style.css">
</head>
<body>

<div id="wrap">
	<header id="header"><%@ include file="/template/top.jsp" %></header>
	<div id="menu"><%@ include file="/template/menu.jsp" %></div>
	<div id="container">
		<nav id="nav"><%@ include file="/template/left.jsp" %></nav>
		<article id="content"><jsp:include page="<%=contentsPage %>" /></article>
	</div>
	<footer id="footer"><%@ include file="/template/bottom.jsp" %></footer>
</div>



</body>
</html>