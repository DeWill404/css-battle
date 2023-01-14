battlename=$1
filename=$2

number=`echo $filename | grep -oP "\d+"`
name=`echo $filename | grep -oP "(?<=\.\s).*"`

length=`expr length "$number"`
[[ $length == 1 ]] && number="0$number"

new_battlename="Battle #${battlename}"
new_filename="$number $name.md"

!([ -d "$new_battlename" ] && [ ! -L "$new_battlename" ]) && mkdir "$new_battlename"

template="# Actual Code
\`\`\`html
\`\`\`

# Minified Code
\`\`\`html
\`\`\`"

echo "$template" > "${new_battlename}/${new_filename}"
nano "${new_battlename}/${new_filename}"
