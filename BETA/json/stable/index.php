<?php
//read JSONs
$equips = json_decode(file_get_contents("EquipmentList.json"), true);
$mats = json_decode(file_get_contents("MaterialList.json"), true);
$potion = json_decode(file_get_contents("PotionList.json"), true);
$quest = json_decode(file_get_contents("QuestList.json"), true);


print("<pre>[");

// /*Equipments
foreach($equips as $resul)
	{ //Equipments
	if(!empty($resul['itemSlot']) && !empty($resul['image']))
		{
		//MAIN
		print("{");
		
		//label
		print('"name":"'.$resul['name'].'", ');
		
		//type
		if($resul['itemSlot'] == 1)
			{
			$type="Weapon";
			}
		elseif($resul['itemSlot'] == 6)
			{
			$type="Trinket";
			}
		else
			{
			$type="Armor";
			}
		print('"type":"'.$type.'", ');
		
		//subType
		print('"subType":"'.$resul['subType'].'", ');
		
		//rarity	
		print('"rarity":"'.$resul['rarity'].'", ');
		

		//icon
		print('"icon":"'.$resul['image'].'"');
		
		
		print("},<br>");
		//MAIN END
		}
	}
// */

// /*Mats
foreach($mats as $resul)
	{
	if(!empty($resul['image']) && substr($resul['image'], -1) != "/")
		{
		//MAIN
		print("{");
		
		//name
		print('"name":"'.$resul['name'].'", ');
		
		//type
		print('"type":"Material", ');
		
		//subType
		print('"subType":"'.$resul['subType'].'", ');
		
		//quality
		print('"rarity":"'.$resul['rarity'].'", ');
		
		//icon
		print('"icon":"'.$resul['image'].'"');
			
		print("},<br>");
		//MAIN END		
		}
	}
// */

// /*Pots
foreach($potion as $resul)
	{
	if(!empty($resul['image']) && substr($resul['image'], -1) != "/")
		{
		//MAIN
		print("{");
		
		//name
		print('"name":"'.$resul['name'].'", ');
		
		//type
		print('"type":"Potion", ');
		
		//subType
		print('"subType":"'.$resul['subType'].'", ');
		
		//quality
		print('"rarity":"'.$resul['rarity'].'", ');
		
		//icon
		print('"icon":"'.$resul['image'].'"');
			
		print("},<br>");
		//MAIN END	
		}
	}
// */

// /*Quests
foreach($quest as $resul)
	{ //Quests
	if($resul['title'] != "Placeholder" && substr($resul['image'], -1) != "/")
		{
		//BEGIN A
		print("{");
		
		//value
		print('"name":"'.$resul['name'].'", ');
		
		//type
		print('"type":"Quest", ');
		
		//subType
		if(empty($resul['title']))
			{
			print('"subType":"Normal", ');
			}
		else
			{
			print('"subType":"'.$resul['title'].'", ');
			}
		
		
		//rarity
		print('"rarity":"1", ');
		
		//icon
		print('"icon":"'.$resul['image'].'"');
		
		print("},<br>");
		//END A
		
		if(isset($resul['nameB']))
			{ //chance there is a rare
			//BEGIN B
			print("{");
			
			//value
			print('"name":"'.$resul['nameB'].'", ');
			
			//type
			print('"type":"Quest", ');
			
			//subType
			print('"subType":"'.$resul['titleB'].'", ');
			
			//rarity
			print('"rarity":"1", ');
			
			//icon
			print('"icon":"'.$resul['imageB'].'"');
			
			print("},<br>");
			//END B
			}
		}
	}
// */
print("]<pre>");

?>