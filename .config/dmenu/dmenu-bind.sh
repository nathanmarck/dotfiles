#!/bin/bash
exe=$(dmenu_run -fn 'Sans-9:normal' -nb '#000000' -nf '#FFFFFF' -sb '#C8C8C8' -sf '#000000') && eval "exec $exe"
