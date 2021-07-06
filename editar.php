









		$dado = $sql->fetch();
		header("Location:index.php");
	$email = addslashes($_POST['email']);
	$id = addslashes($_GET['id']);
	$nome = addslashes($_POST['nome']);
	$pdo->query($sql);
	$sql = "SELECT * FROM usuarios WHERE id = '$id'";
	$sql = "UPDATE usuarios SET nome = '$nome', email = '$email' WHERE id = '$id'";
	$sql = $pdo->query($sql);
	header("Location: index.php");
	if ($sql->rowCount() > 0) {
	}
	} else {
$id = 0;
<?php
=
?>
if(isset($_GET['id']) && empty($_GET['id']) == false) {
if(isset($_POST['nome']) && empty($_POST['nome']) == false){
require 'config.php';
}
} '	' 