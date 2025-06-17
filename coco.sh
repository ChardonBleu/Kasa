#!/bin/bash
set -e

if [[ -z $(git --no-pager diff --staged) ]]; then
    echo "no changes detected !"
    exit 1
fi

type=""
desc=""
icon=""
jira_issue=""

types=("fix" "feat" "refactor" "ci" "docs" "perf" "test" "config" "style")
function print_icon() {
    case "$1"
        in
        fix) echo "🐛";;
        feat) echo "✨";;
        refactor) echo "♻️";;
        ci) echo "👷";;
        config) echo "🔧";;
        docs) echo "📝";;
        perf) echo "⚡️";;
        test) echo "🧪";;
        style) echo "💄";;
    esac
}

while getopts t:d:j: opt
do 
    case "$opt"
        in
        t) type="$OPTARG";;
        d) desc="$OPTARG";;
        j) jira_issue="$OPTARG";;
    esac
done

function join() {
  local IFS="$1"
  shift
  echo "$*"
}

if [ -z "$type" ]
then
    select t in ${types[@]}
    do 
        if [[ -n "$t" ]]
        then
            type=$t
            break
        fi
    done
fi

icon=$(print_icon $type)

while [ -z "$desc" ]
do
    read -p "description (required): " desc
    if [ -z "$desc" ]
    then
        echo "Description is required !"
    fi
done

[ -n "$jira_issue" ] && ji="(SOB-$jira_issue)" || ji=""

git commit -m "$icon $type$ji: $desc"