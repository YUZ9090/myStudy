<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
#frm div {
	font-size:9pt;
	color:red;
	font-weight: bold;
}
</style>

</head>
<body>

<h3>회원가입</h3>

<form id="frm" action="">
		<table border ="1" cellspacing="0" cellpadding="7">
			<tr>
				<td width="100"><label for="name">이름 </label></td>
				<td><input type="text" name="name" id="name" placeholder="이름 입력" />
					<div id="nameDiv"></div>
				</td>
			</tr>
			<tr>
				<td><label for="userid">아이디 </label></td>
				<td><input type="text" name="userid" id="userid" placeholder="아이디 입력" />
					<input type="button" value="중복체크"/>
					<div id="idDiv"></div>
				</td>
			</tr>
			<tr>
				<td width="100"><label for="password">비밀번호 </label></td>
				<td><input type="password" name="password" id="password" placeholder="비밀번호 입력" />
					<div id="pwDiv"></div>
				</td>
			</tr>
			<tr>
				<td width="100"><label for="passwordcheck">재확인 </label></td>
				<td><input type="password" name="passwordcheck" id="passwordcheck" placeholder="비밀번호 재입력"/>
					<div id="pwckDiv"></div>
				</td>
			</tr>
			<tr>
				<td><label for="gender">성별 </label></td>
				<td>
					<input type="radio" name="gender" id="gender_m" value="남자" checked />
					<label for="gender_m">남자</label>
					<input type="radio" name="gender" id="gender_f" value="여자"/>
					<label for="gender_f">여자</label>
				</td>
			</tr>
			
			<tr>
				<td><label for="email">이메일 </label></td>
				<td>
					<input type="text" name="email" id="email2" />
					@
					<input type="text" name="email" id="email3" placeholder="직접입력" />
					<select name="email" id="email4" onchange="OnChange();">
						<option value="none">직접입력</option>
						<option value="naver" >naver.com</option>
						<option value="hanmail">hanmail.com</option>
						<option value="gmail">gmail.com</option>
						
					</select>
				</td>
			</tr>
			
			<tr>
				<td><label for="number">핸드폰 </label></td>
				<td>
					<select name="number" id="number1">
						<option value="010">010</option>
						<option value="011">011</option>
						<option value="016">016</option>
						<option value="111">111</option>
					</select>
					<input type="text" name="number" id="number2" size="5"/>
					<input type="text" name="number" id="number3" size="5"/>
				</td>
				</td>
			</tr>
			

			<tr>
				<td><label for="color">주소</label></td>
				<td>
				<input type="text" name="postcode" id="postcode" placeholder= "우편번호" readonly/>
				<input type="button" onclick="DaumPostcode()" value="우편번호 검색"/><br>
				<input type="text" name="address" id="address" size="50" placeholder= "주소" readonly/><br>
				<input type="text" name="detailAddress" id="detailAddress" size="50" placeholder= "상세주소"/>
				</td>
			</tr>
			<tr>
				<td colspan="2" style="text-align: center">
					<input type="button" value="회원가입" id="joinbtn" onclick="input()"/>
					<input type="reset" value="다시작성" />
				</td>
			</tr>
		</table>
</form>
	
	
	
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>	
<script src="js/join.js"></script>

</body>
</html>