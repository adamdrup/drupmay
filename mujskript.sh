#!/bin/bash  
# Skript pro instalaci modulu  

echo "pole"


names=(Jennifer Tonya Anna Sadie)

for name in ${names[@]}
do
echo $name
done

pole=( bootstrap_layouts libraries pathauto tvi token views_accordion views_bootstrap views_field_view views_parity_row views_slideshow views_slideshow_cycle search_api )

for i in ${pole[@]}
do
   echo "Pracuji na $pole"
   echo $i
   drush en $i
done 
