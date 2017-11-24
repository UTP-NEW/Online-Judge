#!/bin/bash

code=$1
fileInput=$2
correctOutput=$3
timeLimit=$4
g++ $code -o ../submission/z
RES=$?
tiempo=0
if [ $RES == 0 ]
	then
	start_time=$(date +%s%N)

	timeout 1 ./../submission/z <$fileInput> ../submission/output.txt
	RuntimeError=$?
	if [ $RuntimeError -ne 0 -a $RuntimeError -ne 124 ]		# 124: timeout
		then
		RuntimeError=1
	else
		RuntimeError=0
	fi
	
	finish_time=$(date +%s%N)
	let tiempo=($finish_time-$start_time)/1000000
	if [ $tiempo -ge 1000 ]
		then
		tiempo=1000
	fi

	if [ $RuntimeError -eq 0 ]
		then
		if [ $tiempo -eq 1000 ]
			then
			RES="Time Limit"
		else
			diff $correctOutput ../submission/output.txt > ../submission/errores.txt
			x=$?
			echo $x
			if [ $x -ne 0 ]
				then
				RES="Wrong Answer"
			else
			RES="Accepted"
			fi
		fi
	else
		RES="Runtime Error"
	fi
else
	RES="Compilation Error"
fi
echo -e "tiempo: $tiempo ms \n"
echo "resultado: $RES"

# Input
# direccion del codigo
# archivo de entrada
# archivo correcto de salida
# tiempo limite

# 0 Accepted
# 1 Compilation Error
# 2 Runtime Error
# 3 Time Limit
# 4 Presentation Error
# 5 Wrong Answer