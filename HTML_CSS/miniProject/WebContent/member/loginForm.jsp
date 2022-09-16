<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
#login>table, td{
	border-collapse: collapse; 
	border: 1px solid;
	padding:5px;
}

#login input[type="text"]{
	color:blue;
}

#login div {
	font-size:9pt;
	color:red;
	font-weight: bold;
}
</style>

</head>
<body>

<form id=login method="get">
	<table>
		<tr>
			<td><label for="loginid">ID </label></td>
			<td><input type="text" name="loginid" id="loginid" required >
			<div id="loginidDiv"></div>
			</td>
			
		</tr>
		<tr>
			<td><label for="loginpassword">비밀번호</label></td>
			<td><input type="text" name="loginpassword" id="loginpassword" required>
			<div id="loginpwDiv"></div>
			</td>
		</tr>
		<tr>
			<td colspan="2" style="text-align: center;" >
				<input type="button" value="로그인" id="loginbtn" onclick="logon()"/>
				<button type="button" onclick="location.href='index.jsp?contents=member/writeForm'">회원가입</button>
			</td>
		</tr>
	</table>
	
</form>

<script type="text/javascript">

const login = document.getElementById("login");
const loginid = document.getElementById("loginid");
const loginpassword = document.getElementById("loginpassword");


	function logon(){
		if(loginid.value.trim()===""){
			document.getElementById("loginidDiv").innerText="아이디를 입력하세요";
			loginid.focus();
			
			return;
		}
		if(loginpassword.value.trim()===""){
			document.getElementById("loginpwDiv").innerText="비밀번호를 입력하세요";
			loginpassword.focus();
			
			return;
		}

		
		login.submit();
	}


</script>

</body>
</html>